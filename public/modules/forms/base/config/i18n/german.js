'use strict';

angular.module('forms').config(['$translateProvider', function ($translateProvider) {

  $translateProvider.translations('german', {
	FORM_SUCCESS: 'Ihre Antworten wurden gespeichert. Vielen Dank für Ihre Teilnahme!',
	REVIEW: 'Umfrage beenden',
	BACK_TO_FORM: 'Zurück zum Formular',
	EDIT_FORM: '',
	CREATE_FORM: '',
	ADVANCEMENT: '{{done}} von {{total}} beantwortet',
	CONTINUE_FORM: 'Zum Formular',
	REQUIRED: 'verpflichtend',
	COMPLETING_NEEDED: 'Ihr Fragebogen ist unvollständig: {{answers_not_completed}} Antwort(en) fehlt/fehlen noch',
	OPTIONAL: 'fakultativ',
	ERROR_EMAIL_INVALID: 'Bitte gültige Mailadresse eingeben',
	ERROR_NOT_A_NUMBER: 'Bei der Antwort muss es sich um eine ganze Zahl im positiven Bereich handeln.',
	ERROR_URL_INVALID: 'Bitte eine gültige URL eingeben',
	OK: 'Okay',
	ENTER: 'Eingabetaste drücken',
	YES: 'Ja',
	NO: 'Nein',
	NEWLINE: 'Für eine neue Zeile SHIFT+ENTER drücken',
	CONTINUE: 'Weiter',
	LEGAL_ACCEPT: 'I accept',
	LEGAL_NO_ACCEPT: 'I don’t accept',
	DELETE: 'Entfernen',
	CANCEL: 'Canceln',
	SUBMIT: 'Speichern',
	UPLOAD_FILE: 'Datei versenden',
	Y: 'J',
	N: 'N',
	PREV_BUTTON: 'Zurück zur vorhergehenden Frage',
	NEXT_BUTTON: 'Zur nächsten Frage'
  });

}]);
