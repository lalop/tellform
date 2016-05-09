'use strict';

angular.module('forms').config(['$translateProvider', function ($translateProvider) {

  $translateProvider.translations('french', {
    FORM_SUCCESS: 'Votre formulaire a été enregistré!',
	SUBMIT: 'Submit',
	REVIEW: 'Review',
    BACK_TO_FORM: 'Retourner au formulaire',
	EDIT_FORM: 'Éditer le Tellform',
	CREATE_FORM: 'Créer un TellForm',
	ADVANCEMENT: '{{done}} complétés sur {{total}}',
	COMPLETING_NEEDED: '{{answers_not_completed}} réponse(s) doive(nt) être complétée(s)',
	CONTINUE_FORM: 'Aller au formulaire',
	OPTIONAL: 'facultatif',
	ERROR_EMAIL_INVALID: 'Merci de rentrer une adresse mail valide',
	ERROR_NOT_A_NUMBER: 'Merce de ne rentrer que des nombres',
	ERROR_URL_INVALID: 'Merci de rentrer une url valide',
	OK: 'OK',
	YES: 'Oui',
	NO: 'Non',
	ENTER: 'presser ENTRÉE',
	NEWLINE: 'presser SHIFT+ENTER pour créer une nouvelle ligne',
	CONTINUE: 'Continuer',
	LEGAL_ACCEPT: 'J’accepte',
	LEGAL_NO_ACCEPT: 'Jen n’accepte pas',
	DELETE: 'Supprimer',
	CANCEL: 'Réinitialiser',
	UPLOAD_FILE: 'Envoyer des fichier',
	SUBMIT: 'Enregistrer'
  });

}]);
