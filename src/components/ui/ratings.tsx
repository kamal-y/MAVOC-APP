import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const ratingVariants = {
  default: {
    star: "text-foreground",
    emptyStar: "text-muted-foreground",
  },
  destructive: {
    star: "text-red-500",
    emptyStar: "text-red-200",
  },
  yellow: {
    star: "text-yellow-500",
    emptyStar: "text-yellow-200",
  },
};

interface RatingsProps extends React.HTMLAttributes<HTMLDivElement> {
  rating: number;
  totalStars?: number;
  size?: number;
  fill?: boolean;
  Icon?: React.ElementType;
  variant?: keyof typeof ratingVariants;
}

const Ratings: React.FC<RatingsProps> = ({
  rating,
  totalStars = 5,
  size = 20,
  fill = true,
  Icon = Star,
  variant = "default",
  className,
  ...rest
}) => {
  const fullStars = Math.floor(rating);
  const partialStarPercentage = rating % 1;

  return (
    <div className={cn("flex items-center gap-1", className)} {...rest}>
      {/* Full stars */}
      {Array.from({ length: fullStars }).map((_, i) => (
        <Icon
          key={`full-${i}`}
          size={size}
          className={cn(
            fill ? "fill-current" : "fill-transparent",
            ratingVariants[variant].star,
          )}
        />
      ))}

      {/* Partial star */}
      {partialStarPercentage > 0 && (
        <PartialStar
          fillPercentage={partialStarPercentage}
          size={size}
          className={ratingVariants[variant].star}
          Icon={Icon}
        />
      )}

      {/* Empty stars */}
      {Array.from({
        length: totalStars - fullStars - (partialStarPercentage > 0 ? 1 : 0),
      }).map((_, i) => (
        <Icon
          key={`empty-${i}`}
          size={size}
          className={cn(
            fill ? "fill-current" : "fill-transparent",
            ratingVariants[variant].emptyStar,
          )}
        />
      ))}
    </div>
  );
};

interface PartialStarProps {
  fillPercentage: number;
  size: number;
  className?: string;
  Icon: React.ElementType;
}

const PartialStar: React.FC<PartialStarProps> = ({
  fillPercentage,
  size,
  className,
  Icon,
}) => {
  return (
    <div style={{ position: "relative", display: "inline-block", width: size }}>
      {/* Empty portion of the star */}
      <Icon size={size} className={cn("fill-transparent", className)} />
      {/* Filled portion of the star */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: `${fillPercentage * 100}%`,
          height: "100%",
          overflow: "hidden",
        }}
      >
        <Icon size={size} className={cn("fill-current", className)} />
      </div>
    </div>
  );
};

export { Ratings };
