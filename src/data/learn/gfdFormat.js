export default {
  title: 'GraphQL Factory Definition Format',
  next: {
    title: 'SchemaDefinition',
    name: 'learn.documenting'
  },
  content: [
    {
      component: 'paragraph',
      html: '```GraphQL&nbsp;Factory&nbsp;Definition&nbsp;Format``` (referred here on as ```GFD```) is ' +
      'a way to represent schema definitions using plain JavaScript objects.'
    },
    {
      component: 'paragraph',
      html: '<h4>Why Plain Objects?</h4>You may be asking why it would be necessary to use this format. ' +
      'GraphQL already has a great schema language and there are already tools for building executable ' +
      'schemas with those definitions. The answer is that you don\'t, but there are some nice advantages.'
    },
    {
      component: 'paragraph',
      html: '<h4>Advantages</h4>GraphQL Factory will consume any type of definition or ' +
      'GraphQL object and decompose it into ' +
      '```GFD```. It does this in order to facilitate the merging of different bits and pieces of ' +
      'GraphQL into a single schema, also known as ```Schema&nbsp;Stitching```. Additionally, ' +
      'once the schema is in ```GFD``` it is easier to remove unwanted pieces from the schema ' +
      'and export it in various formats. Another advantage is that pieces of the schema including ' +
      'resolver functions, can be created in ```.js``` files and imported using standard methods'
    },
    {
      component: 'paragraph',
      html: '<h4>Format</h4>```GFD``` is actually quite similar to creating types and schemas using ' +
      'graphql type instance. The difference is that you don\'t need to instantiate any type objects ' +
      'and deal with dependencies.'
    },
    {
      component: 'paragraph',
      html: '<h4>Stores</h4>Stores refer to the top level keys in a ```GFD```.'
    },
    {
      component: 'prism',
      language: 'flow',
      code: `type FactoryDefinition = {
  context?: ?ContextStore;
  functions?: ?FunctionsStore;
  directives?: ?DirectivesStore;
  schema: SchemaDef;
  types: TypesStore;
}`
    },
    {
      component: 'paragraph',
      html: '<hr><h4>context store</h4>The context store is itself a plain object that will be merged ' +
      'into each graphql request context. It has no set structure.'
    },
    {
      component: 'prism',
      language: 'flow',
      code: `type ContextStore = {
  [contextKey: string]: any;
}`
    },
    {
      component: 'paragraph',
      html: '<h6>Example</h6>'
    },
    {
      component: 'prism',
      language: 'javascript',
      code: `{
  jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ'
}`
    },
    {
      component: 'paragraph',
      html: '<hr><h4>functions store</h4>The function store is a hash of functions. The key for each ' +
      'function is used to reference it in other parts of the definition. The store must be a flat object'
    },
    {
      component: 'prism',
      language: 'flow',
      code: `type FunctionsStore = {
  [functionName: string]: () => ?mixed;
}`
    },
    {
      component: 'paragraph',
      html: '<h6>Example</h6>'
    },
    {
      component: 'prism',
      language: 'javascript',
      code: `{
  resolveFoo (source, args, context, info) {
    return context.db.table('foo').get(args.id);
  },
  resolveBar (source, args, context, info) {
    return context.db.table('bar').get(args.id);
  }
}`
    },
    {
      component: 'paragraph',
      html: '<hr><h4>types store</h4>The types store is a hash of type definitions. The key for each ' +
      'type definition is the type name. Type definitions are almost identical to graphql type ' +
      'configurations except that they must have a top level type key and all field and argument ' +
      'types use schema definition format instead of instantiated types'
    },
    {
      component: 'prism',
      language: 'flow',
      code: `/**
 * TypeString will refer to a schema definition
 * representation of a graphql type (i.e [String!]!)
 * 
 * TypeRef will refer to a base type name (i.e. "Foo")
 */

type TypesStore = {
  [typeName: string]: FactoryDef;
}

type FactoryTypeDef = FactoryObjectTypeDef |
  FactoryInputObjectTypeDef |
  FactoryEnumTypeDef |
  FactoryScalarTypeDef |
  FactoryUnionTypeDef |
  FactoryInterfaceTypeDef;

// Object
type FactoryObjectTypeDef = {
  type: "Object";
  interfaces?: Array<TypeRef>;
  fields: FactoryFieldConfigMap;
  isTypeOf?: (value: any, info?: GraphQLResolveInfo) => boolean;
  description?: ?string,
  @directives?: DirectiveFieldConfigMap?;
}

type FactoryFieldConfigMap = {
  [fieldName: string]: FactoryFieldconfig;
}

type FactoryFieldConfig = {
  type: TypeString;
  args?: FactoryFieldConfigArgumentMap;
  resolve?: GraphQLFieldResolveFn;
  deprecationReason?: string;
  description?: ?string;
  @directives?: DirectiveFieldConfigMap?;
}

type FactoryFieldConfigArgumentMap = {
  [argName: string]: FactoryArgumentConfig;
}

type FactoryArgumentConfig = {
  type: TypeString;
  defaultValue?: any;
  description?: ?string;
  @directives?: DirectiveFieldConfigMap?;
}

type DirectiveFieldConfigMap = {
  [directiveName: string]: DirectiveArgMap | boolean;
}

type DirectiveArgMap = {
  [argName: string]: any;
}

// Input
type FactoryInputObjectTypeDef = {
  type: "Input";
  fields: FactoryInputObjectFieldMap;
  @directives?: DirectiveFieldConfigMap?;
}

type FactoryInputObjectFieldMap = {
  [fieldName: string]: FactoryInputObjectField;
}

type FactoryInputObjectField = {
  type: TypeString;
  defaultValue?: any;
  description?: ?string;
  @directives?: DirectiveFieldConfigMap?;
}

// Enum
type FactoryEnumTypeDef = {
  type: "Enum";
  values: FactoryEnumValueMap;
  description?: ?string;
  @directives?: DirectiveFieldConfigMap?;
}

type FactoryEnumValueMap = {
  [enumName: string]: FactoryEnumValue;
}

type FactoryEnumValue = {
  value?: any;
  deprecationReason?: string;
  description?: ?string;
  @directives?: DirectiveFieldConfigMap?;
}

// Scalar
type FactoryScalarTypeDef = {
  type: "Scalar";
  description?: ?string;
  serialize: (value: mixed) => ?InternalType;
  parseValue?: (value: mixed) => ?InternalType;
  parseLiteral?: (valueAST: Value) => ?InternalType;
  @directives?: DirectiveFieldConfigMap?;
}

// Union
type FactoryUnionTypeDef = {
  type: "Union";
  types: Array<TypeRef>;
  resolveType?: (value: any, info?: GraphQLResolveInfo) => ?GraphQLObjectType;
  description?: ?string;
  @directives?: DirectiveFieldConfigMap?;
}

// Interface
type FactoryInterfaceTypeDef = {
  type: "Interface";
  fields: FactoryFieldConfigMap;
  resolveType?: (value: any, info?: GraphQLResolveInfo) => ?GraphQLObjectType;
  description?: ?string;
  @directives?: DirectiveFieldConfigMap?;
}
`
    },
    {
      component: 'paragraph',
      html: '<h6>Example</h6>'
    },
    {
      component: 'prism',
      language: 'javascript',
      code: `{
  Foo: {
    type: 'Object',
    fields: {
      id: { type: 'ID!' },
      name: { type: 'String!' }
    }
  }
}`
    },
    {
      component: 'paragraph',
      html: '<hr><h4>directives store</h4>The directives store is a hash of directive definitions. ' +
      'The key for each directive definition is the directive name.'
    },
    {
      component: 'prism',
      language: 'flow',
      code: `type DirectivesStore = {
  [directiveName: string]: FactoryDirectiveDef;
}

type FactoryDirectiveDef = {
  name: string;
  description?: string?;
  locations: Array<DirectiveLocation>;
  args?: FactoryFieldConfigArgumentMap?;
  resolve?: GraphQLFieldResolveFn;
  resolveResult?: GraphQLFieldResolveFn;
}
`
    },
    {
      component: 'paragraph',
      html: '<h6>Example</h6>'
    },
    {
      component: 'prism',
      language: 'javascript',
      code: `{
  test: {
    name: 'test',
    locations: [ DirectiveLocation.SCHEMA ],
    args: {
      value: { type: 'JSON' }
    },
    resolve(source, args) {
      console.log(args);
    }
  }
}`
    },
    {
      component: 'paragraph',
      html: '<hr><h4>schema store</h4>The schema store is a flat object containing references to ' +
      'the root query, mutation, and subscription types.'
    },
    {
      component: 'prism',
      language: 'flow',
      code: `type SchemaStore = {
  query: TypeRef;
  mutation?: TypeRef?;
  subscription?: TypeRef?;
  @directives?: DirectiveFieldConfigMap?;
}
`
    },
    {
      component: 'paragraph',
      html: '<h6>Example</h6>'
    },
    {
      component: 'prism',
      language: 'javascript',
      code: `{
  query: 'Query',
  mutation: 'Mutation',
  '@directives': {
    test: {
      value: { test: true }
    }
  }
}`
    }
  ]
}
