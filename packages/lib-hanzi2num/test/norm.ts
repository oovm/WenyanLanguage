import 'should'
import { hanzi_norm } from '../source/main'



describe('norm testing', function () {
    it('T1: 11', () => {
        const out = hanzi_norm('壹拾壹')
        out.should.equal('一十一')
    })
    it('T2: 24', () => {
        const out = hanzi_norm('廿四')
        out.should.equal('二十四')
    })
})
