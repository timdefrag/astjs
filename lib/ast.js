// From Underscore.JS ...
var _ = {};
[ 'Arguments' , 'Function' , 'String',
  'Number'    , 'Date'     , 'RegExp' ]
.forEach(function(name) {
  _['is' + name] = function(obj) {
    return toString.call(obj) == '[object ' + name + ']';
  };
});
// ... End Underscore.JS


// Other helpers
function mixInto(obj, mix) {
  for (var prop in mix) {
    obj[prop] = mix[prop];
  }
}


// Export Classes


//
var LawBuilder = module.exports.Law = function(property, predicate) {
  this.audit = function(obj) {
    return predicate(obj[property]);
  };
  
  this.build = function () {
    
  };
};


//
var MutateBuilder = module.exports.Mutator = function(name, action) {
  
  
  this.build = function () {
    
  };
};


//
var WalkBuilder = module.exports.Walker = function(name, action) {
  
  
  this.build = function () {
    
  };
};


//
var LawyerBase = module.exports.Lawyer = function(mixin) {
  for (var prop in mixin) {
    this[prop] = mixin[prop];
  }
};


//
var TypeBuilder = module.exports.Type = function() {
  this.laws      = [];
  this.mutators  = [];
  this.validate  = null;
  
  this.build = function () {
    
  };
};


//
var LawyerBuilder = module.exports.Builder = function () {
  var typeBuilders = {};
  
  this.addType = function () {
    for (var i = 0; i < arguments.length; i++) {
      if (_.isString(arguments[0])) {
        
      }
    }
  };
  
  this.addType.apply(this, arguments);
  
  this.build = function () {
    var mixin = {};
    
    function regType (typeName) {
      var prop = 'Type_' + typeName;
      if ( !mixin[prop] ) {
        mixin[prop] = {};
      }
      return mixin[prop];
    }
    
    
    for(var typeName in this.typeDefs){
      var typeDef = this.typeDefs[typeName].build;
      mixInto( regType(typeName), typeDef.build() );
    }
  };
};

