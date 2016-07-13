'use strict';

angular.module('forms').config(['$translateProvider', function ($translateProvider) {

  $translateProvider.translations('english', {
    FORM_SUCCESS: 'Your answers have been saved. Thank you for your participation!',
	REVIEW: 'Finish the survey',
    BACK_TO_FORM: 'Go back to Form',
	EDIT_FORM: 'Edit this TellForm',
	CREATE_FORM: 'Create this TellForm',
	ADVANCEMENT: '{{done}} out of {{total}} answered',
	CONTINUE_FORM: 'Continue to Form',
	REQUIRED: 'required',
	COMPLETING_NEEDED: 'Your questionnaire is incomplete: {{answers_not_completed}} answer(s) must be completed',
	OPTIONAL: 'optional',
	ERROR_EMAIL_INVALID: 'Please enter a valid email address',
	ERROR_NOT_A_NUMBER: 'The answer must be a positive integer',
	ERROR_URL_INVALID: 'Please a valid url',
	OK: 'OK',
	ENTER: 'press ENTER',
	YES: 'Yes',
	NO: 'No',
	NEWLINE: 'press SHIFT+ENTER to create a newline',
	CONTINUE: 'Continue',
	LEGAL_ACCEPT: 'I accept',
	LEGAL_NO_ACCEPT: 'I don’t accept',
	DELETE: 'Delete',
	CANCEL: 'Cancel',
	SUBMIT: 'Submit',
	UPLOAD_FILE: 'Upload your File',
	Y: 'Y',
	N: 'N',
	PREV_BUTTON: 'Back to the previous question',
	NEXT_BUTTON: 'Go to next question',
	SAVE_MESSAGE: 'You have answered all the questions in this survey. In order for your answers to be taken into account, please click on "Submit".'
  });

  $translateProvider.preferredLanguage('english')
  	.fallbackLanguage('english')
	.useSanitizeValueStrategy('escape');

}]);
