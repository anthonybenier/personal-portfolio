export const Footer = () => {
    return (
        <footer className="py-8 px-6 bg-black text-white/60 text-sm flex justify-between items-center border-t border-white/10">
            <p>&copy; {new Date().getFullYear()} Antigravity. All rights reserved.</p>
            <div className="flex gap-4">
                <a href="#" className="hover:text-white transition-colors">GitHub</a>
                <a href="#" className="hover:text-white transition-colors">Twitter</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
        </footer>
    );
};
