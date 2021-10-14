import React from 'react'
import Skeleton from './Skeleton.js'

const SkeletonProduct = () => {
	return (
		<div className="skeleton-wrapper">
			<Skeleton type="thumbnail" />
			<Skeleton type="text" />
			<Skeleton type="price" />
			<Skeleton type="cate" />
			<Skeleton type="btnn" />
			<div className="shimmer-wrapper">
				<div className="shimmer"></div>
			</div>

		</div>
	)
}

export default SkeletonProduct