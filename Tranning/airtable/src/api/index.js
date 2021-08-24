import axios from 'axios'

export default function callapi(method, endpoint, data) {
    return axios({
        method,
        url: `${endpoint}`,
        data,
        headers: {
            "Authorization": `Bearer keyTimHLo5RrqOnag`,
            "X-Airtable-Client-Secret": "foo-123123",
            "Content-Type": "application/json"
        }
    })
}


const a = {
    "records": [{
            "fields": {
                "Name": "Narrative of the Life of Frederick Douglass, an American Slave",
                "Author": [
                    "recDM5i7ctVB4w4Bd"
                ],
                "Cover Photo": [{
                        "url": "https://dl.airtable.com/.attachments/1fff359fe76eb6c68334281e1192b8ff/4696e24d/narrative-of-the-life-of-frederick-douglass-by-robert-wallman-12-by-18-print-unframed-print-recovering-the-classics-26240904014_2048x.jpg"
                    },
                    {
                        "url": "https://dl.airtable.com/IrsyOmZRyuEdZpr7ePXs_9781682280126_narrative-of-the-life-of-frederick-generic.jpg"
                    }
                ],
                "Bought?": true,
                "Synopsis": "Narrative of the Life of Frederick Douglass is an 1845 memoir and treatise on abolition written by famous orator and former slave Frederick Douglass d..."
            }
        },
        {
            "fields": {
                "Personal Notes": "I wasn'\''t expecting this to be so laugh-out-loud funny! Lots of extremely savage burns.",
                "Name": "Pride and Prejudice",
                "Read?": true,
                "Author": [
                    "rec2WKOf28YEgqVY3"
                ],
                "Cover Photo": [{
                        "url": "https://dl.airtable.com/.attachments/8c81377e9b09d722013519d0441b0988/432fdc00/rtc_PrideandPrejudice_AlexisLampley.jpeg"
                    },
                    {
                        "url": "https://dl.airtable.com/.attachments/ad938e5ece73dd404eb91aa9536262b0/98d0d661/rtc_PrideandPrejudice_TimDaniel.jpeg"
                    }
                ],
                "Bought?": true,
                "Personal Rating": 5,
                "Synopsis": "Pride and Prejudice is an 1813 romantic novel of manners written by Jane Austen. The novel follows the character development of Elizabeth Bennet, the ..."
            }
        }
    ],
    "typecast": true
}