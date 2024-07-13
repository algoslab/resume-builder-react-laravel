import BuilderIndex from "./BuilderIndex";

export default function PersonalInfo({ auth }) {
    return (
        <BuilderIndex auth={auth}>
            <div>Personal Info</div>
        </BuilderIndex>
    );
}
