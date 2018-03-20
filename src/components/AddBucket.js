import React from 'react';
import styled from 'styled-components';
import BucketContainer from './BucketContainer';

const AddBucketContainer = BucketContainer.extend`
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px dashed #ededed;
`;

export default ({ onClick }) => {
	return (
		<AddBucketContainer className="add-bucket pointer">
			<div className="" onClick={onClick}>ADD</div>
		</AddBucketContainer>
	);
}