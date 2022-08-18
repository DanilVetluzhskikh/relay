/**
 * @generated SignedSource<<f7238a0f6346eb6f10ac336418008f83>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateRepositoryInput = {
  clientMutationId?: string | null;
  description?: string | null;
  hasIssuesEnabled?: boolean | null;
  hasProjectsEnabled?: boolean | null;
  hasWikiEnabled?: boolean | null;
  homepageUrl?: any | null;
  name?: string | null;
  repositoryId: string;
  template?: boolean | null;
};
export type UpdateRepositoryMutation$variables = {
  input: UpdateRepositoryInput;
};
export type UpdateRepositoryMutation$data = {
  readonly updateRepository: {
    readonly repository: {
      readonly description: string | null;
      readonly id: string;
      readonly isPrivate: boolean;
      readonly name: string;
    } | null;
  } | null;
};
export type UpdateRepositoryMutation = {
  response: UpdateRepositoryMutation$data;
  variables: UpdateRepositoryMutation$variables;
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
    "concreteType": "UpdateRepositoryPayload",
    "kind": "LinkedField",
    "name": "updateRepository",
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
    "name": "UpdateRepositoryMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateRepositoryMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "3c2e64aa3a1000fce00fd01e814f50f2",
    "id": null,
    "metadata": {},
    "name": "UpdateRepositoryMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateRepositoryMutation(\n  $input: UpdateRepositoryInput!\n) {\n  updateRepository(input: $input) {\n    repository {\n      id\n      name\n      description\n      isPrivate\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "50063a61ba9a79994d0bf4d48987b0c1";

export default node;
