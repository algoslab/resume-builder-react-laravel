import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Header from "@/Components/Header";

export default function BuilderIndex({ auth, children }) {
    let headLines = [
        { personalInfo: "Personal Info" },
        { educations: "Educations" },
        { experiences: "Experiences" },
        { skills: "Skills" },
        { careerObjective: "Career Objective" },
        { references: "References" },
        { interests: "Interests" },
        { projects: "Projects" },
        { languages: "Languages" },
        { activities: "Activities" },
        { achievements: "Achievements" },
        { publications: "Publications" },
    ];
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<Header headLines={headLines} />}
        >
            <Head title="Resume Builder" />

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
