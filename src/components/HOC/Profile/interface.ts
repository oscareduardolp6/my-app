import { WrappedComponentProps } from "../../HOC2/withTrackClick/interface";

interface ProfileOwnProps{
    ownerName: string; 

}

export type ProfileProps =  ProfileOwnProps & WrappedComponentProps; 