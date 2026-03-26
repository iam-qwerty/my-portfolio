"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Twitter, Facebook, Linkedin, Link } from "lucide-react";

interface ShareButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    url: string;
    title: string;
}

export default function ShareButton({
    className,
    url,
    title,
    ...props
}: ShareButtonProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [showCopied, setShowCopied] = useState(false);

    const handleShare = (platform: string) => {
        const encodedUrl = encodeURIComponent(url);
        const encodedTitle = encodeURIComponent(title);

        const urls = {
            twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
            linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
        };

        window.open(urls[platform as keyof typeof urls], "_blank", "noopener,noreferrer");
    }

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setShowCopied(true);
            setTimeout(() => setShowCopied(false), 2000)
        } catch (error) {
            console.log("Failed to copy link: ", error);
        }
    }
    const shareButtons = [
        { icon: Twitter, action: () => handleShare("twitter") },
        { icon: Facebook, action: () => handleShare("facebook") },
        { icon: Linkedin, action: () => handleShare("linkedin") },
        { icon: Link, action: handleCopyLink },
    ];

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Button
                className={cn(
                    "min-w-40 relative",
                    "bg-yellow-400",
                    "hover:bg-gray-50 dark:hover:bg-gray-950",
                    "text-black dark:text-white",
                    "border border-black/10 dark:border-white/10",
                    "transition-all duration-300",
                    isHovered ? "opacity-0" : "opacity-100",
                    className
                )}
                {...props}
            >
                <span className="flex items-center gap-2">
                    <Link className="w-4 h-4" />
                    Share
                </span>
            </Button>

            {/* Feedback for copied link to be replaced with toast later on*/}
            {showCopied && (
                <div className="absolute top-12 left-0 w-full text-center text-sm text-yellow-400">
                    Link copied!
                </div>
            )}

            <div className="absolute top-0 left-0 flex h-10">
                {shareButtons.map((button, index) => (
                    <button
                        type="button"
                        key={index}
                        onClick={button.action}
                        className={cn(
                            "h-10",
                            "w-10",
                            "flex items-center justify-center",
                            "bg-black dark:bg-white",
                            "text-yellow-400 dark:text-black",
                            "transition-all duration-300",
                            index === 0 && "rounded-l-md",
                            index === 3 && "rounded-r-md",
                            "border-r border-white/10 dark:border-black/10 last:border-r-0",
                            "hover:bg-gray-900 dark:hover:bg-gray-100",
                            "transform",
                            isHovered
                                ? "translate-x-[0%] opacity-100"
                                : "translate-x-[-100%] opacity-0",
                            index === 0 && "transition-all duration-200",
                            index === 1 &&
                            "transition-all duration-200 delay-[50ms]",
                            index === 2 &&
                            "transition-all duration-200 delay-100",
                            index === 3 &&
                            "transition-all duration-200 delay-150"
                        )}
                        aria-label={`Share via ${button.icon.displayName}`}
                    >
                        <button.icon className="w-4 h-4" />
                    </button>
                ))}
            </div>
        </div>
    );
}
