import React from 'react';
import styled from 'styled-components';
import BucketContainer from './BucketContainer';

const AddBucketContainer = BucketContainer.extend`
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px dashed #ededed;
	color: #ededed;

	:hover {

	}
`;

const AddIcon = styled.i`
	font-size: 8em;
`;

export default ({ onClick }) => {
	return (
		<AddBucketContainer className="add-bucket pointer" onClick={onClick}>
			<AddIcon className="material-icons">add</AddIcon>
		</AddBucketContainer>
	);
}