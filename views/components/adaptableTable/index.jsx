import React from 'react'

export default function adaptabletable(props){
	return(
		<table>
			<thead>
				<tr>
					<th>#</th>
					<th>nombre</th>
					<th>%/precio</th>
				</tr>
			</thead>
			<tbody>
				props.data.map(row => (
					<tr>
						<td>{row.nobre}</td>
						<td>{row.precio}</td>
					</tr>
				))
			</tbody>
		</table>
	)
}