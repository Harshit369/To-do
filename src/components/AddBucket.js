import React from 'react';
import styled from 'styled-components';
import BucketContainer from './BucketContainer';
import { Themed } from '../theme';

const AddBucketContainer = Themed(BucketContainer.extend`
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px dashed ${({theme}) => theme.primary};
	color: ${({ theme }) => theme.primary};
`);

const AddIcon = styled.i`
	font-size: 8em;
`;

const AddBucket = ({ onClick }) => {
	return (
		<AddBucketContainer className="add-bucket pointer" onClick={onClick}>
			<AddIcon className="material-icons">add</AddIcon>
		</AddBucketContainer>
	);
}

export default AddBucket;