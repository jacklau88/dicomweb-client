import { DICOMwebClient } from './api.js';
import { 
  getStudyInstanceUIDFromUri, getSeriesInstanceUIDFromUri,
  getSOPInstanceUIDFromUri, getFrameNumbersFromUri
} from './utils.js';

let api = {
  DICOMwebClient,
};
let utils = {
  getStudyInstanceUIDFromUri,
  getSeriesInstanceUIDFromUri,
  getSOPInstanceUIDFromUri,
  getFrameNumbersFromUri
};

export { api, utils };
