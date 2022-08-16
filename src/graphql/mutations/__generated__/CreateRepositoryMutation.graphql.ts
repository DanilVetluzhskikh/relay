/**
 * @generated SignedSource<<1e77cdd1287fe3110d1717b5b311fa26>>
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
      readonly id: string;
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
    "cacheID": "14c18eb3c693aa8e900f6df1e920538a",
    "id": null,
    "metadata": {},
    "name": "CreateRepositoryMutation",
    "operationKind": "mutation",
    "text": "mutation CreateRepositoryMutation(\n  $input: CreateRepositoryInput!\n) {\n  createRepository(input: $input) {\n    repository {\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "846af307c274fab4e8929ce1e28f6810";

export default node;
