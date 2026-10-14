// Every exam page from Sanity, sorted by code, shaped for the templates
// (rich text already rendered to HTML, BoardCerts links attached as
// `exam.boardcerts`). Pagination in src/certifications/certification.njk
// iterates over this — publishing a new exam in Sanity creates its page.
module.exports = ({ sanity }) => sanity.examsList;
