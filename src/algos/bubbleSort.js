export default function* sort(data) {
    let unsortedLength = data.length;

    const swap = (i1, i2) => {
        const temp = data[i1].value;
        data[i1].value = data[i2].value;
        data[i2].value = temp;
    };
    while (unsortedLength >= 2) {
        for (let i = 0; i < unsortedLength - 1; i++) {
            const left = data[i];
            const right = data[i + 1];

            left.sorted = false
            right.sorted = false

            left.active = true;
            right.active = true;


            yield data;

            if (left.value > right.value) swap(i, i + 1);

            yield data

            left.active = false;
            right.active = false;
            if( i === unsortedLength -2 ){
                right.sorted = true
            }
        }
        unsortedLength--;
    }
    data[0].sorted = true
    yield data
}
