export interface TrackClickProps {
    renderProps(clicks: number): React.ReactElement; // Para el RenderProps patter de reutilizar lógica
} 

export interface TrackClickState {
    clicks: number; 
}