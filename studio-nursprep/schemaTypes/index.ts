import {categoryType} from './documents/category'
import {examType} from './documents/exam'
import {siteSettingsType} from './documents/site-settings'
import {inlineTextType, proseTextType} from './objects/rich-text'
import {factBoxType, keyValueType, linkType} from './objects/shared'

export const schemaTypes = [
  // documents
  examType,
  categoryType,
  siteSettingsType,
  // objects
  proseTextType,
  inlineTextType,
  factBoxType,
  keyValueType,
  linkType,
]
