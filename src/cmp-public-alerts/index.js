import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';

const publicAlerts = [
	["Weather","Colorado", "Winter Storm Warning issued for Rocky Mountain Range. Issuer: National Weather Service"],
	["Weather","Oregon", "Usual winds in the region and local dangers can be expected (e.g. mistral, summer storm, rising waters, strong waves submerging the coastline)"],
	["Fire","Texas, Southern", "Extreme Fire Watch. Very dry and gusty conditions expected for all of Deep South Texas"],
	["Advisory","Florida, Central", "HIGH RIP CURRENT RISK IN EFFECT FROM 7 AM EST THIS MORNING"],
	["Advisory","California, Los Angeles", "HIGH SURF ADVISORY REMAINS IN EFFECT UNTIL 9 AM PST TUESDAY"],
	["Weather","Oklahoma, Missouri", "Tornado advisory through Thursday. Shelter in fortified sub-basement."],
]

const view = (state, {updateState}) => {
	const {alerts} = state;
	return (
		<div>
			<div class="titleRow">
				<div class="column left">
					<h2>Alert Type</h2>				
				</div>
				<div class="column middle">
					<h2>Location</h2>
				</div>
				<div class="column right">
					<h2>Description</h2>
				</div>
			</div>
			{alerts.array.forEach(element => {
				<div class="row">
					<div class="column left">
						<p>{element[0]}</p>
					</div>
					<div class="column middle">
						<p>{element[1]}</p>
					</div>
					<div class="column right">
						<p>{element[2]}</p>
					</div>
				</div>
			});			
			}
		</div>
	);
};

createCustomElement('cmp-public-alerts', {
	renderer: {type: snabbdom},
	view,
	properties: {
		alerts
	},
	initialState: {
		alerts = publicAlerts
	},
	styles: styles
});
