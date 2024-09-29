import * as React from "react";
import * as PropTypes from "prop-types";
interface StarProps {
    onRate: () => void;
    full: boolean;
    onHoverIn: () => void;
    onHoverOut: () => void;
    color: string;
    size: number;
}
interface StarRatingProps {
    maxRating?: number;
    defaultRating?: number;
    size?: number;
    color?: string;
    className?: string;
    onSetMovieRating?: (rating: number) => void;
    messages?: string[];
    count?: boolean;
}
export declare function StarRating({ maxRating, color, size, className, messages, defaultRating, onSetMovieRating, count, }: StarRatingProps): React.JSX.Element;
export declare namespace StarRating {
    var propTypes: {
        maxRating: PropTypes.Requireable<number>;
        defaultRating: PropTypes.Requireable<number>;
        size: PropTypes.Requireable<number>;
        color: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        onSetMovieRating: PropTypes.Requireable<(...args: any[]) => any>;
        messages: PropTypes.Requireable<any[]>;
        count: PropTypes.Requireable<boolean>;
    };
}
declare function Star({ onRate, full, onHoverIn, onHoverOut, color, size, }: StarProps): React.JSX.Element;
declare const _default: {
    StarRating: typeof StarRating;
    Star: typeof Star;
};
export default _default;
