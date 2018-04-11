import React from 'react';
import styled from 'styled-components';
import BucketContainer from './BucketContainer';

const AddBucketContainer = BucketContainer.extend`
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px dashed ${(props) => {
		console.log(props)
		return props.theme.green
	}};
	color: #ededed;

	:hover {

	}
`;

const AddIcon = styled.i`
	font-size: 8em;
`;

export default ({ onClick }, {theme}) => {
	return (
		<AddBucketContainer className="add-bucket pointer" onClick={onClick} theme={theme}>
			<AddIcon className="material-icons">add</AddIcon>
		</AddBucketContainer>
	);
}