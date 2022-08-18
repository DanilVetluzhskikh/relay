import { RefetchFnDynamic } from "react-relay";
import { Options } from "react-relay/relay-hooks/useRefetchableFragmentNode";
import { GetUserInfoQuery } from "../graphql/query/__generated__/GetUserInfoQuery.graphql";
import { GetUserInfoQueryFragment$key } from "../graphql/query/__generated__/GetUserInfoQueryFragment.graphql";
import { Repository } from "./user";

export type listContextProps = {
    refetch: RefetchFnDynamic<GetUserInfoQuery, GetUserInfoQueryFragment$key | null, Options>;
    id?: string;
    totalCount?: number;
    handleCloseEditModal: () => void;
    isModalEditOpen: boolean;
    currentItem: Repository | null;
}
