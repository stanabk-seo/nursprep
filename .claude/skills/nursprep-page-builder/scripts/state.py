#!/usr/bin/env python3
"""Atomic reader/writer for .skill-state/pipeline.json.

Usage:
    python state.py next                          # print next pending code, or "EMPTY"
    python state.py status                        # human-readable summary
    python state.py start CODE                    # set status=in_progress, attempts++
    python state.py stage CODE STAGE              # mark stage done (research|brief|data_file|build_validated|committed)
    python state.py done CODE                     # set status=done, completed_at=now
    python state.py fail CODE "error message"    # set status=failed, last_error=msg

Paths are resolved relative to the git repo root.
"""
import json, sys, subprocess, datetime, fcntl, os

def repo_root():
    r = subprocess.run(['git', 'rev-parse', '--show-toplevel'],
                       capture_output=True, text=True, check=True)
    return r.stdout.strip()

def state_path():
    return os.path.join(repo_root(), '.skill-state', 'pipeline.json')

def now():
    return datetime.datetime.utcnow().isoformat() + 'Z'

def load():
    with open(state_path()) as f:
        fcntl.flock(f.fileno(), fcntl.LOCK_SH)
        return json.load(f)

def save(state):
    state['last_updated'] = now()
    path = state_path()
    tmp = path + '.tmp'
    with open(tmp, 'w') as f:
        fcntl.flock(f.fileno(), fcntl.LOCK_EX)
        json.dump(state, f, indent=2)
        f.write('\n')
    os.replace(tmp, path)

def find(state, code):
    for e in state['exams']:
        if e['code'] == code:
            return e
    raise KeyError(f"No exam with code {code}")

def cmd_next():
    s = load()
    # Pending with attempts<2
    for e in s['exams']:
        if e['status'] == 'pending' and e.get('attempts', 0) < 2:
            print(e['code'])
            return
    # Failed retries
    for e in s['exams']:
        if e['status'] == 'failed' and e.get('attempts', 0) < 2:
            print(e['code'])
            return
    print('EMPTY')

def cmd_status():
    s = load()
    counts = {}
    for e in s['exams']:
        counts[e['status']] = counts.get(e['status'], 0) + 1
    print(f"Total: {len(s['exams'])}")
    for k, v in sorted(counts.items()):
        print(f"  {k}: {v}")
    pending = [e['code'] for e in s['exams'] if e['status'] == 'pending']
    if pending:
        print(f"\nNext up: {pending[0]}")
        print(f"Queue: {', '.join(pending[:10])}{'...' if len(pending) > 10 else ''}")

def cmd_start(code):
    s = load()
    e = find(s, code)
    e['status'] = 'in_progress'
    e['attempts'] = e.get('attempts', 0) + 1
    e['last_attempt_at'] = now()
    e['last_error'] = None
    save(s)
    print(f"{code}: in_progress (attempt {e['attempts']})")

def cmd_stage(code, stage):
    valid = {'research','brief','data_file','build_validated','committed'}
    if stage not in valid:
        sys.exit(f"Invalid stage: {stage}. Valid: {valid}")
    s = load()
    e = find(s, code)
    e['stages'][stage] = 'done'
    save(s)
    print(f"{code}: stage {stage} → done")

def cmd_done(code):
    s = load()
    e = find(s, code)
    e['status'] = 'done'
    e['completed_at'] = now()
    e['last_error'] = None
    save(s)
    print(f"{code}: done")

def cmd_fail(code, msg):
    s = load()
    e = find(s, code)
    e['status'] = 'failed'
    e['last_error'] = msg[:300]
    save(s)
    print(f"{code}: failed — {msg[:100]}")

if __name__ == '__main__':
    args = sys.argv[1:]
    if not args:
        sys.exit(__doc__)
    cmd = args[0]
    if cmd == 'next': cmd_next()
    elif cmd == 'status': cmd_status()
    elif cmd == 'start': cmd_start(args[1])
    elif cmd == 'stage': cmd_stage(args[1], args[2])
    elif cmd == 'done': cmd_done(args[1])
    elif cmd == 'fail': cmd_fail(args[1], args[2])
    else: sys.exit(f"Unknown cmd: {cmd}")
