import {Star, StarHalf, StarOutline} from 'react-ionicons'

const RatingOverview = ({id, rating, ratedCount}: { id: number, rating: number, ratedCount: number }) => {
    const fullStars = Math.floor(rating)
    const halfStar = rating - fullStars > 0.49
    const stars = Array.from(Array(5)).map((e, i) => {
        if (i + 1 <= fullStars) {
            return <Star key={`rating-icon-${id}${i}`} width="15px" height="15px"/>
        }

        if(i === fullStars && halfStar) {
            return <StarHalf key={`rating-icon-${id}${i}`} width="15px" height="15px"/>
        }

        return <StarOutline key={`rating-icon-${id}${i}`} width="15px" height="15px"/>
    })

    return (<div className="flex gap-1">
        {stars} <div className="text-xs font-bold text-black/50">{rating} <span className="font-normal">({ratedCount})</span></div>
    </div>)
}

export default RatingOverview