import { PrimaryButton } from "@fluentui/react";
import { Repository } from "../../../types/user";


export const RenderLanguages = ({languages}: Repository) =>  (
    languages?.edges?.map(({node: {name, id}}) => (
        <PrimaryButton 
            key={id}
            style={{marginRight: 10}}
        >{name}</PrimaryButton>
    ))
)
