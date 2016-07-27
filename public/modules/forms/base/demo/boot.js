
angular.module('NodeForm', [
    'ui.select', 'cgBusy', 'ngSanitize', 'vButton', 'ngResource',
    'ui.router', 'ui.bootstrap', 'ui.utils', 'ngRaven'
]);
angular.module('forms', [
    'duScroll', 'ngResource', 'NodeForm.templates', 'pascalprecht.translate',
    'angular-input-stars'
]);
angular.module('NodeForm').requires.push('forms');

angular.module('forms').factory('Auth', [
  function() {
    var service = {
      _currentUser: null,
      get currentUser(){
        return this._currentUser;
      },
      ensureHasCurrentUser: function() {
        return null;
      },
      isAuthenticated: function() {
        return false;
      },
      getUserState: function() {
        return '';
      },
      login: function() {
      },
      logout: function() {
      },
    };
    return service;
  }
]);
angular.module('forms').factory('$state', [function() {
    return {
        go: function() {}
    };
}]);
angular.module('forms').factory('myForm', ['Forms', function(Forms) {
    var form = window.form;
    angular.forEach(form.form_fields, function(field, index) {
		if(form.form_fields[index]._id === undefined) {
            form.form_fields[index]._id = '_'+index;
        }
	});
    form.visible_form_fields = form.form_fields;
    return form;
}]);
angular.module('forms').constant('FORM_URL', '/form/:formId');


angular.module('forms').value('SendVisitorData', {
	send: function(){}
});
angular.element(document).ready(function() {
	//Then init the app
	angular.bootstrap(document, ['forms']);
});
