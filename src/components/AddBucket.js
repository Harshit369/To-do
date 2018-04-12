import React from 'react';
import styled from 'styled-components';
import BucketContainer from './BucketContainer';
import PropTypes from 'prop-types';

const AddBucketContainer = BucketContainer.extend`
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px dashed ${({theme}) => theme.primary};
	color: ${({ theme }) => theme.primary};

	:hover {

	}
`;

const AddIcon = styled.i`
	font-size: 8em;
`;

const AddBucket = ({ onClick }, { theme }) => {
	return (
		<AddBucketContainer className="add-bucket pointer" onClick={onClick} theme={theme}>
			<AddIcon className="material-icons">add</AddIcon>
		</AddBucketContainer>
	);
}

AddBucket.contextTypes = {
	theme: PropTypes.object
}

export default AddBucket;