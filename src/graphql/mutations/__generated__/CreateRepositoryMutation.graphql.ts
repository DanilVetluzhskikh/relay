/**
 * @generated SignedSource<<e4c53a16f33c032738954ec26575439c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type RepositoryVisibility = "INTERNAL" | "PRIVATE" | "PUBLIC" | "%future added value";
export type CreateRepositoryInput = {
  clientMutationId?: string | null;
  description?: string | null;
  hasIssuesEnabled?: boolean | null;
  hasWikiEnabled?: boolean | null;
  homepageUrl?: any | null;
  name: string;
  ownerId?: string | null;
  teamId?: string | null;
  template?: boolean | null;
  visibility: RepositoryVisibility;
};
export type CreateRepositoryMutation$variables = {
  input: CreateRepositoryInput;
};
export type CreateRepositoryMutation$data = {
  readonly createRepository: {
    readonly repository: {
      readonly description: string | null;
      readonly id: string;
      readonly isPrivate: boolean;
      readonly name: string;
    } | null;
  } | null;
};
export type CreateRepositoryMutation = {
  response: CreateRepositoryMutation$data;
  variables: CreateRepositoryMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateRepositoryPayload",
    "kind": "LinkedField",
    "name": "createRepository",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "description",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isPrivate",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateRepositoryMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateRepositoryMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "51e5fc56c40128b0db654ef52b84b892",
    "id": null,
    "metadata": {},
    "name": "CreateRepositoryMutation",
    "operationKind": "mutation",
    "text": "mutation CreateRepositoryMutation(\n  $input: CreateRepositoryInput!\n) {\n  createRepository(input: $input) {\n    repository {\n      id\n      name\n      description\n      isPrivate\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "f433f621a3fddbcc872d451e42e02ef4";

export default node;
