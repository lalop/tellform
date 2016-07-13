'use strict';

angular.module('forms').config(['$translateProvider', function ($translateProvider) {

  $translateProvider.translations('italian', {
	FORM_SUCCESS: 'Le tue risposte sono state registrate con successo. Grazie per la tua partecipazione!',
	REVIEW: 'Completa il sondaggio',
	BACK_TO_FORM: 'Ritorna al formulario',
	EDIT_FORM: '',
	CREATE_FORM: '',
	ADVANCEMENT: '{{done}} su {{total}} completate',
	CONTINUE_FORM: 'Vai al formulario',
	REQUIRED: 'obbligatorio',
	COMPLETING_NEEDED: 'Il tuo questionario è incompleto: manca/mancano {{answers_not_completed}} risposta/e',
	OPTIONAL: 'opzionale',
	ERROR_EMAIL_INVALID: 'Si prega di inserire un indirizzo email valido',
	ERROR_NOT_A_NUMBER: 'La risposta deve essere un numero intero positivo',
	ERROR_URL_INVALID: 'Grazie per inserire un URL valido',
	OK: 'OK',
	ENTER: 'premere INVIO',
	YES: 'Sì',
	NO: 'No',
	NEWLINE: 'premere SHIFT+INVIO per creare una nuova linea',
	CONTINUE: 'Continua',
	LEGAL_ACCEPT: 'I accept',
	LEGAL_NO_ACCEPT: 'I don’t accept',
	DELETE: 'Cancella',
	CANCEL: 'Reset',
	SUBMIT: 'Registra',
	UPLOAD_FILE: 'Invia un file',
	Y: 'S',
	N: 'N',
	PREV_BUTTON: 'Torna alla domanda precedente',
	NEXT_BUTTON: 'Vai alla domanda successiva',
	SAVE_MESSAGE: 'Hai risposto a tutte le domande di questo sondaggio. Affinché le tue risposte siano prese in considerazione, clicca su "Registra".'
  });

}]);
