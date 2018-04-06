import React from 'react'

export default function AdaptableTable(props){
	return(
		<table>
			<thead>
				<tr>
					<th>#</th>
					<th>nombre</th>
					<th>precio</th>
				</tr>
			</thead>
			<tbody>
				{
					props.data.map(row => (
						<tr>
							<td>{row.id}</td>
							<td>{row.nombre}</td>
							<td>{row.precio}</td>
						</tr>
					))
				}
			</tbody>
		</table>
	);
}