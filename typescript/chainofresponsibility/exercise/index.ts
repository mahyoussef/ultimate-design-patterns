import {Data} from "./data";
import {DataProcessor} from "./data-processor-chain-handler";
import {DataSizeChecksHandler} from "./data-size-check-handler";
import {PersonalInformationChecksHandler} from "./personal-information-check-handler";
import {ValidationChecksHandler} from "./validate-check-handler";

let validateCheck = new ValidationChecksHandler();
let dataSizeCheck = new DataSizeChecksHandler();
let personalInformationCheck = new PersonalInformationChecksHandler();
validateCheck.setNext(dataSizeCheck);
dataSizeCheck.setNext(personalInformationCheck);

let data: Data = {
  isHasPassedDataSizeChecks: true,
  isHasPassedFormattingChecks: true,
  isHasPassedPersonalInformationChecks: true,
  isHasPassedValidationChecks: true,
};

let dataProcessor = new DataProcessor(validateCheck);
let response = dataProcessor.processData(data);
console.log(response);
