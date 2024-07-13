import DashboardIndex from "./DashboardIndex";

export default function ProfileViews({ auth }) {
    return (
        <DashboardIndex auth={auth}>
            <div>ProfileViews</div>
        </DashboardIndex>
    );
}
