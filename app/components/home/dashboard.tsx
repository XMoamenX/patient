import { HoverCardDemo } from "../folder/patient";
// Dummy dashboard component with content
export default function Dashboard() {
    return (
        <div className="flex flex-1">
            <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 gap-2 flex-1 w-full h-full justify-content: flex-start;">
                      <HoverCardDemo />
            </div>
        </div>
    );
}
