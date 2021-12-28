let publisher = require("@pact-foundation/pact-node")
let path = require("path")

let opts = {
    pactFilesOrDirs: [path.resolve(process.cwd(), "__tests__/contract/pacts")],
    pactBroker: "https://trivialsearch.pactflow.io/",
    pactBrokerToken: 'HTAxLcRZ8iHhT_12HevZYA',
    consumerVersion: "1.0.3",
    providerVersion: "1.0.3",
    tags: "dev"
}

publisher.publishPacts(opts)