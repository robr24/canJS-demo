import can from 'can';
import 'can/util/fixture/';
import faker from 'faker';

var store = can.fixture.store(10, (i) => {
	let name = faker.name.firstName();
	let imgUrl = faker.image.image();
	let desc = faker.lorem.sentence();
	let rank = i + 1;
	let hours = faker.helpers.randomNumber(9) + 1;

	return {
		id: i,
		rank: rank,
		name: name,
		imgUrl: imgUrl,
		desc: desc,
		hours: hours
	}
});


can.fixture('GET /reddit', store.findAll);

export { store as default };