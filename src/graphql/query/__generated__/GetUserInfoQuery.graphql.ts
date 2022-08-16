/**
 * @generated SignedSource<<5827cb754e7e399a06133258199a199b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type OrderDirection = "ASC" | "DESC" | "%future added value";
export type RepositoryOrderField = "CREATED_AT" | "NAME" | "PUSHED_AT" | "STARGAZERS" | "UPDATED_AT" | "%future added value";
export type RepositoryOrder = {
  direction: OrderDirection;
  field: RepositoryOrderField;
};
export type GetUserInfoQuery$variables = {
  first?: number | null;
  orderBy?: RepositoryOrder | null;
};
export type GetUserInfoQuery$data = {
  readonly user: {
    readonly login: string;
    readonly repositories: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly description: string | null;
          readonly id: string;
          readonly isPrivate: boolean;
          readonly languages: {
            readonly edges: ReadonlyArray<{
              readonly node: {
                readonly id: string;
                readonly name: string;
              };
            } | null> | null;
          } | null;
          readonly name: string;
        } | null;
      } | null> | null;
      readonly totalCount: number;
    };
  } | null;
};
export type GetUserInfoQuery = {
  response: GetUserInfoQuery$data;
  variables: GetUserInfoQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "first"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "orderBy"
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "login",
    "value": "DanilVetluzhskikh"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "login",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": [
    {
      "kind": "Variable",
      "name": "first",
      "variableName": "first"
    },
    {
      "kind": "Variable",
      "name": "orderBy",
      "variableName": "orderBy"
    }
  ],
  "concreteType": "RepositoryConnection",
  "kind": "LinkedField",
  "name": "repositories",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "totalCount",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "RepositoryEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Repository",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            (v3/*: any*/),
            (v4/*: any*/),
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
            },
            {
              "alias": null,
              "args": [
                {
                  "kind": "Literal",
                  "name": "first",
                  "value": 5
                }
              ],
              "concreteType": "LanguageConnection",
              "kind": "LinkedField",
              "name": "languages",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "LanguageEdge",
                  "kind": "LinkedField",
                  "name": "edges",
                  "plural": true,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "Language",
                      "kind": "LinkedField",
                      "name": "node",
                      "plural": false,
                      "selections": [
                        (v4/*: any*/),
                        (v3/*: any*/)
                      ],
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": "languages(first:5)"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "GetUserInfoQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v5/*: any*/)
        ],
        "storageKey": "user(login:\"DanilVetluzhskikh\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "GetUserInfoQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v5/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": "user(login:\"DanilVetluzhskikh\")"
      }
    ]
  },
  "params": {
    "cacheID": "3b831377f5ffc361a583cca6809c55a5",
    "id": null,
    "metadata": {},
    "name": "GetUserInfoQuery",
    "operationKind": "query",
    "text": "query GetUserInfoQuery(\n  $first: Int\n  $orderBy: RepositoryOrder\n) {\n  user(login: \"DanilVetluzhskikh\") {\n    login\n    repositories(orderBy: $orderBy, first: $first) {\n      totalCount\n      edges {\n        node {\n          id\n          name\n          description\n          isPrivate\n          languages(first: 5) {\n            edges {\n              node {\n                name\n                id\n              }\n            }\n          }\n        }\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "7cec8e08ef3d0c0a05f769014460bd32";

export default node;
