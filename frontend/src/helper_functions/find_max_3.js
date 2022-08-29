import int_to_label from "./int_to_label";

function find_max_3(arr) {
    let largArr = [];
    let indArr = [];
    let labels = [];
    largArr[0] = 0;
    largArr[1] = 0;
    largArr[2] = 0;
    let i = 0;

    

    for (i = 0; i < arr.length; i++) {
        if (arr[i] > largArr[0]) {
            largArr[0] = arr[i];
            indArr[0] = i;
        }
    }


    for (i = 0; i < arr.length; i++) {
        if (arr[i] > largArr[1]
            && arr[i] < largArr[0]) {
            largArr[1] = arr[i];
            indArr[1] = i;
        }
    }

    for (i = 0; i < arr.length; i++) {
        if (arr[i] > largArr[2]
            && arr[i] < largArr[1]) {
            largArr[2] = arr[i];
            indArr[2] = i;
        }
    }

    labels = indArr.map(i => int_to_label(i));

    return [largArr, labels];
}

export default find_max_3;