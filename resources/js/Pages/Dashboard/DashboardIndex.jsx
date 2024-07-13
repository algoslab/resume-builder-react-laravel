import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Header from "@/Components/Header";

export default function DashboardIndex({ auth, children }) {
    let headLines = [
        { profileViews: "Profile Views" },
        { appliedJobs: "Applied Jobs" },
    ];
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<Header headLines={headLines} />}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
