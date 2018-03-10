import React from 'react';
import styled from 'styled-components';
import BucketContainer from './BucketContainer';

console.log(BucketContainer);

const AddBucketContainer = BucketContainer.extend`
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px dashed #ededed;
`;

export default ({ onClick }) => {
	console.log(onClick);
	return (
		<AddBucketContainer className="add-bucket">
			<div className="" onClick={onClick}>ADD</div>
		</AddBucketContainer>
	);
}