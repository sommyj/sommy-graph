import {
  Transfer as TransferEvent
} from "../generated/Request/Request"
import {
  Transfer
} from "../generated/schema"

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.from
  entity.receiver = event.params.to
  entity.amount = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
