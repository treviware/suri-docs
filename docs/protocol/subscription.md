# Subscription model

When suris are sold, they agree with their parents how to pay them using a subscription model. Parents can configure
this subscription model setting the following parameters:

- **Expiration**: the date in which the suri will expire.
- **Subscription interval**: the number of seconds between each subscription payment.
- **Subscription amount**: the amount of tokens (can be any) that will be paid each subscription interval.
- **Extra initial payment**: the amount of tokens that will be paid at the moment of the subscription + the
  **Subscription amount** of the first period.
- **Initial paid periods**: the number of periods that have been already paid at the moment of the subscription. This
  allows to give offers like "3 months free".

::: note Insight
Note that once a suri is bought, this configuration cannot be changed until expiration.
:::

This model offers different payment possibilities like:

- Free for a period, e.g. 1 year free.
- Single payment for a period, e.g. 10$ for 1 year.
- Recurring payment for a period, e.g. 1$ per month up to 1 year.

With this model we achieve one of **Suri**'s main goals: suris must expire to not be permanently lost.

## Parent control

Parents define the contract with their children but after buying one, the contract is fixed and cannot be changed until
expiration. This means that parents can't change the subscription model or the price of the suri.

But parents can perform some actions to control their children:

- **Freeze**: parents can freeze children. This means that the suri cannot be configured until unfreezing it.
- **Expire**: parents can force the expiration of their children, transferring the ownership to another user or opening
  them to be bought again.

These actions can harm the current children's owners so during the buying process both sides can agree a fee the parent
will pay to children if any of these actions occur. This would be a way to protect children's owners from parents' bad
actions without entirely removing parents the control of their children.