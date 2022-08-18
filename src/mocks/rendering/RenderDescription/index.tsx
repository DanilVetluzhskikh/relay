import { Repository } from "../../../types/user";

export const RenderDescription = ({description}: Repository) => description ?? 'Missing'
