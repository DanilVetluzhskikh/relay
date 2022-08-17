import React, { FC, Suspense} from "react";
import { useLazyLoadQuery } from "react-relay";
import { ListRepositories } from "./components/ListRepositories";
import { Spinner } from "@fluentui/react";
import { GetUserInfoQuery } from "./graphql/query/__generated__/GetUserInfoQuery.graphql";
import { queryUserInfo } from "./graphql/query";

export const AppInit: FC = () => {
    const preloaded = useLazyLoadQuery<GetUserInfoQuery>(queryUserInfo, {});

    return (
        <Suspense fallback={<Spinner label="Loading... " />}>
            <ListRepositories
                preloaded={preloaded}
            />
        </Suspense>
    );
  }
