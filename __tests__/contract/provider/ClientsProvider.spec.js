const path = require("path")
const { Verifier } = require("@pact-foundation/pact")
const { server, importData } = require("../../../src/provider")
const { TIMEOUT } = require("dns")

const SERVER_URL = "http://localhost:8081"

server.listen(8081, () => {
    importData()
    console.log(`Clients Service listening on ${SERVER_URL}`)
  })
  
  describe("Clients Service Verification", () => {
    it("validates the expectations of Client Service", async () => {
      let opts = {
            provider: "Clients Service",
            logLevel: "DEBUG",
            providerBaseUrl: SERVER_URL,
            //pactUrls: [path.resolve(process.cwd(), "__tests__/contract/pacts/frontend-clientsservice.json")],
            pactUrls: ['https://trivialsearch.pactflow.io/pacts/provider/ClientsService/consumer/Frontend/version/1.0.1'],
            pactBrokerToken: 'HTAxLcRZ8iHhT_12HevZYA',
            consumerVersionTags: ["dev"],
            providerVersionTags: ["dev"],
            publishVerificationResult: true,
            providerVersion: "1.0.4",
            jest: TIMEOUT='10000'
          }
        await new Verifier(opts).verifyProvider().then(output => {
            console.log("Pact Verification Complete!")
            console.log(output)
        })
    })
})