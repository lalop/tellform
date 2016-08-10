'use strict';

angular.module('forms').config(['$translateProvider', function ($translateProvider) {

  $translateProvider.translations('french', {
    FORM_SUCCESS: 'Vos réponses ont bien été enregistrées. Merci pour votre participation !',
	REVIEW: 'Terminer le sondage',
    BACK_TO_FORM: 'Retourner au formulaire',
	EDIT_FORM: 'Éditer le Tellform',
	CREATE_FORM: 'Créer un TellForm',
	ADVANCEMENT: '{{done}} complétée(s) sur {{total}}',
	CONTINUE_FORM: 'Aller au formulaire',
	REQUIRED: 'obligatoire',
	COMPLETING_NEEDED: 'Votre questionnaire est incomplet : {{answers_not_completed}} réponse(s) doit/doivent être complétée(s)',
	OPTIONAL: 'facultatif',
	ERROR_EMAIL_INVALID: 'Merci de rentrer une adresse mail valide',
	ERROR_NOT_A_NUMBER: 'La réponse doit être un nombre positif',
	ERROR_URL_INVALID: 'Merci de rentrer une url valide',
	OK: 'OK',
	ENTER: 'Presser ENTRÉE',
	YES: 'Oui',
	NO: 'Non',
	NEWLINE: 'Presser SHIFT+ENTER pour créer une nouvelle ligne',
	CONTINUE: 'Continuer',
	LEGAL_ACCEPT: 'J’accepte',
	LEGAL_NO_ACCEPT: 'Je n’accepte pas',
	DELETE: 'Supprimer',
	CANCEL: 'Réinitialiser',
	SUBMIT: 'Enregistrer',
	UPLOAD_FILE: 'Envoyer un fichier',
	Y: 'O',
	N: 'N',
	PREV_BUTTON: 'Revenir à la question précédente',
	NEXT_BUTTON: 'Aller à la question suivante',
	SAVE_MESSAGE: 'Vous avez  répondu à toutes les questions de ce sondage. Pour que vos réponses soient prises en compte, merci de cliquer sur "Enregistrer".'
  });

}]);
