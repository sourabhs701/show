export function LoadingSpinner({ className }) {
    return (
        <div className={cn("flex items-center justify-center", className)}>
            <div className="w-6 h-6 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
        </div>
    );
} 