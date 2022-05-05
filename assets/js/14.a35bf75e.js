(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{597:function(e,a,v){e.exports=v.p+"assets/img/queue-argument.01b663c7.png"},598:function(e,a,v){e.exports=v.p+"assets/img/exchanges.85b36131.png"},618:function(e,a,v){"use strict";v.r(a);var n=v(17),_=Object(n.a)({},(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("队列毫无疑问在消息队列中占据着核心地位，rabbitmq提供了诸多设置让我们能够自如地定义队列。这些设置有很多，挑一些常用的列举在下方：")]),e._v(" "),n("ul",[n("li",[e._v("自动删除")]),e._v(" "),n("li",[e._v("限制唯一消费者消费")]),e._v(" "),n("li",[e._v("自动过期队列")]),e._v(" "),n("li",[e._v("限制消息的数量")])]),e._v(" "),n("p",[e._v("非常重要的是，一旦我们创建了一个队列，队列的设置就无法被更改了，改变队列的设置只能通过删除然后重新创建的方式。")]),e._v(" "),n("p",[e._v("通过在"),n("code",[e._v("Queue.Declare")]),e._v("请求中加入"),n("code",[e._v("auto_delete")]),e._v("标志可以创建临时队列，所谓临时队列就是一旦消费者拿走队列的全部消息、断开连接，队列就会被删除。值得留意的是，临时队列可以被任意数量的消费者消费，只有当不再有消费者监听该队列了，这个队列才会被删除。")]),e._v(" "),n("p",[e._v("在队列声明请求中加入"),n("code",[e._v("exclusive")]),e._v("标志可以限制消费者的数量为一，声明一个排他队列，排他队列也会自动删除，但它的行为和临时队列有所不同，排他队列在连接断开后被删除，临时队列则与是否有订阅者有关。")]),e._v(" "),n("p",[e._v("通过在队列声明请求中加入"),n("code",[e._v("x-expires")]),e._v("参数可以声明一个定时队列，参数单位为毫秒，定时队列会在过期时间到后被自动删除，需要注意的是只要定时队列上由消费者，那么除非消费者停止订阅或者连接断开，该队列是不会被自动删除的。另外当消费者向该队列发送"),n("code",[e._v("Basic.Get")]),e._v("请求后，"),n("code",[e._v("x-expires")]),e._v("参数就失效了，该队列不再是定时队列了。rabbitmq不保证删除定时队列的及时性。")]),e._v(" "),n("p",[e._v("通过在创建队列请求中将"),n("code",[e._v("durable")]),e._v("参数置为true，可以让该队列成为一个永久队列，并被持久化到磁盘中去，直到"),n("code",[e._v("Queue.Delete")]),e._v("命令删除该队列。")]),e._v(" "),n("p",[e._v("通过在创建队列时设置"),n("code",[e._v("x-message-ttl")]),e._v("可以设置队列中消息的过期时间，设置"),n("code",[e._v("x-max-length")]),e._v("可以设置队列最大消息数，当队列中的消息达到了这个数目，就无法向队列中添加消息了。如果该队列声明了"),n("code",[e._v("DLX")]),e._v("，那么过期的消息和无法添加的消息会被交给"),n("code",[e._v("DLX")]),e._v("处理。")]),e._v(" "),n("p",[e._v("声明一个队列可使用的参数及其作用如下图所示：")]),n("div",{attrs:{align:"center"}},[n("img",{attrs:{src:v(597)}})]),n("p"),e._v(" "),n("p",[e._v("rabbitmq最强大的力量来自于exchange基于消息中的routing信息将消息路由至不同队列的灵活性。通过exchange，消息可以被路由至一个或多个队列，其他exchange，还可以是外部资源。在rabbitmq中有四种类型的exchange：")]),e._v(" "),n("ul",[n("li",[e._v("Direct exchange")]),e._v(" "),n("li",[e._v("Fanout exchange")]),e._v(" "),n("li",[e._v("Topic exchange")]),e._v(" "),n("li",[e._v("Headers exchange")])]),e._v(" "),n("p",[e._v("Direct exchange是rabbitmq中最简单的exchange，它可以被多个队列绑定，当消息发送至此exchange时，它会将消息的routing-key同与之绑定的队列的binding-key做比较，只有当两个字符串完全相等时，exchange才会将消息丢到队列中去。")]),e._v(" "),n("p",[e._v("Fanout exchange会将接受的消息发送到所有绑定的队列中去，因为不需要进行routing-key和binding-key的比较，所有性能会很好，但是也因为缺乏选择机制，路由至所有队列中的消息都应该被消费。")]),e._v(" "),n("p",[e._v("Topic exchange同Direct exchange一样会基于routing-key选择性的路由消息到队列中，不同的是Topic exchange不需要完全匹配，它通过基于通配符的模式匹配完成工作。")]),e._v(" "),n("p",[e._v("Headers exchange的允许在消息中自描述路由逻辑，在消息头的Basic.Properties中添加headers属性，headers表随意添加key/value对，队列与exchange的绑定使用的也不再是字符串数组，而是key/value对的数组，绑定会被设置一个叫x-match的参数，值为any或者all，any表示任意匹配，all则是全匹配。Headers exchange提供强大的路由机制，但代价是也给broker带来了额外的计算负担，在比较路由之前，headers表中的属性值会先被排序。但是有一点需要注意的是只要在消息的属性中设置了headers，那么无论消息被发送至什么类型的exchange上，性能都会受到影响。")]),e._v(" "),n("p",[e._v("一个exchange可以有多个queue绑定，那么一个消息可以被发送至多个exchange吗？答案是可以的。通过exchange-to-exchange绑定，你可以做到这一切，不同于队列绑定使用Queue.Bind method，exchange绑定使用Exchange.Bind method。这种机制非常灵活，灵活可能会使系统变得复杂。rabbitmq中的主要exchange类型如下图所示：")]),n("div",{attrs:{align:"center"}},[n("img",{attrs:{src:v(598)}})]),n("p")])}),[],!1,null,null,null);a.default=_.exports}}]);